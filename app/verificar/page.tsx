"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { toast } from "sonner";
import {
  ShieldCheck,
  ShieldAlert,
  LockKeyhole,
  Loader2,
  FileText,
  Download,
  Search,
  LogOut,
  Stethoscope,
  Scale,
} from "lucide-react";

// --- Sub-components for Visualizing Data ---

const DataField = ({
  label,
  value,
}: {
  label: string;
  value: string | null | undefined;
}) => (
  <div className="mb-4">
    <p className="font-bold text-gray-500 text-xs uppercase tracking-wide">
      {label}
    </p>
    <p className="mt-1 text-gray-900 text-sm md:text-base whitespace-pre-wrap">
      {value || <span className="text-gray-400 italic">No especificado</span>}
    </p>
  </div>
);

const QualityReportView = ({ data }: { data: any }) => (
  <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
    <div className="col-span-1 md:col-span-2 bg-slate-50 p-4 border border-slate-200 rounded-lg">
      <DataField
        label="Descripción del Evento"
        value={data.event_description}
      />
    </div>

    <div className="space-y-4">
      <h3 className="flex items-center gap-2 pb-2 border-b font-semibold text-main-600">
        <Stethoscope className="w-4 h-4" /> Detalles Operativos
      </h3>
      <DataField label="Procedimiento" value={data.procedure} />
      <DataField label="Dispositivo / Lote" value={data.device_info} />
      <DataField label="Momento del Evento" value={data.event_timing} />
      <DataField label="Contacto Reportante" value={data.contact_info} />
    </div>

    <div className="space-y-4">
      <h3 className="flex items-center gap-2 pb-2 border-b font-semibold text-main-600">
        Información del Paciente
      </h3>
      <div className="gap-2 grid grid-cols-2">
        <DataField label="Iniciales" value={data.patient_initials} />
        <DataField label="Edad" value={data.age} />
      </div>
      <DataField label="Historial Médico" value={data.medical_history} />
      <DataField label="Diagnóstico" value={data.diagnosis} />
      <DataField label="Estado Final" value={data.patient_status} />
    </div>
  </div>
);

const IntegrityReportView = ({
  data,
  fileUrl,
}: {
  data: any;
  fileUrl: string | null;
}) => (
  <div className="space-y-6">
    <div className="bg-slate-50 p-6 border border-slate-200 rounded-lg">
      <DataField
        label="Descripción del Reporte"
        value={data.report_description}
      />
    </div>

    <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
      <div>
        <DataField label="Reportado Por" value={data.full_name || "Anónimo"} />
        <DataField
          label="Contacto"
          value={data.contact_info || "No provisto"}
        />
      </div>

      <div>
        <p className="mb-2 font-bold text-gray-500 text-xs uppercase tracking-wide">
          Adjunto de Evidencia
        </p>
        {fileUrl ? (
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-50 p-3 border border-blue-200 rounded-md w-fit text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Download className="w-4 h-4" />
            Descargar Archivo Adjunto
          </a>
        ) : (
          <div className="flex items-center gap-2 bg-gray-50 p-3 border border-gray-200 rounded-md w-fit text-gray-400">
            <FileText className="w-4 h-4" />
            Sin archivos adjuntos
          </div>
        )}
      </div>
    </div>
  </div>
);

// --- Main Page Component ---

function VerifyContent() {
  const searchParams = useSearchParams();
  const urlId = searchParams.get("id");

  // State
  const [reportId, setReportId] = useState(urlId || "");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  // 1. Check for Session on Mount
  useEffect(() => {
    const savedPassword = sessionStorage.getItem("admin_session_key");
    if (savedPassword) {
      setPassword(savedPassword);
      setIsAuthenticated(true);
      // If we have an ID in URL and we are authed, verify immediately
      if (urlId) {
        verifyReport(urlId, savedPassword);
      }
    }
  }, [urlId]);

  // 2. Login Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return toast.error("Ingrese la clave");

    sessionStorage.setItem("admin_session_key", password);
    setIsAuthenticated(true);
    toast.success("Sesión iniciada");

    if (reportId) {
      verifyReport(reportId, password);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_session_key");
    setIsAuthenticated(false);
    setPassword("");
    setResult(null);
    toast.info("Sesión cerrada");
  };

  // 3. Verification Logic
  const verifyReport = async (id: string, key: string) => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/verify-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reportId: id, accessCode: key }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 401) {
          handleLogout(); // Force logout if password changed/wrong
          throw new Error("Clave inválida o expirada");
        }
        throw new Error(data.message || "Error al verificar");
      }

      setResult(data);
      if (data.status === "verified") toast.success("Integridad verificada");
      else if (data.status === "tampered")
        toast.error("ALERTA: DATOS ADULTERADOS");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  const handleManualSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (reportId) verifyReport(reportId, password);
  };

  // --- RENDER: LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="mx-auto px-4 pt-32 pb-12 max-w-md container">
        <Card className="shadow-2xl border-t-4 border-t-main-500">
          <CardHeader className="pb-2 text-center">
            <div className="flex justify-center items-center bg-main-100 mx-auto mb-4 rounded-full w-12 h-12">
              <LockKeyhole className="w-6 h-6 text-main-600" />
            </div>
            <CardTitle className="text-2xl">Acceso Seguro</CardTitle>
            <CardDescription>
              Ingrese la clave de administración para visualizar los reportes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Clave de Acceso"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-lg text-center"
              />
              <Button
                type="submit"
                className="bg-main-500 hover:bg-main-600 py-6 w-full text-lg"
              >
                Ingresar al Panel
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // --- RENDER: DASHBOARD ---
  return (
    <div className="mx-auto px-4 pt-32 pb-12 max-w-5xl container">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-bold text-gray-800 text-3xl">
            Visor de Reportes
          </h1>
          <p className="text-gray-500">
            Sistema de verificación e integridad documental
          </p>
        </div>
        <Button variant="outline" onClick={handleLogout} className="gap-2">
          <LogOut className="w-4 h-4" /> Salir
        </Button>
      </div>

      {/* SEARCH BAR */}
      <Card className="mb-8 p-2">
        <CardContent className="flex items-center gap-4">
          <Search className="ml-2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Pegue el ID del reporte (UUID)..."
            value={reportId}
            onChange={(e) => setReportId(e.target.value)}
            className="shadow-none border-0 focus-visible:ring-0 font-mono text-lg"
          />
          <Button
            onClick={handleManualSearch}
            disabled={loading}
            className="bg-main-500 hover:bg-main-500/75 text-white hover:cursor-pointer"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Buscar"}
          </Button>
        </CardContent>
      </Card>

      {/* RESULT DISPLAY */}
      {result && (
        <div className="slide-in-from-bottom-4 animate-in duration-500 fade-in">
          {/* Header Status Badge */}
          <div
            className={`p-4 rounded-t-lg border-x border-t flex items-center justify-between ${
              result.status === "verified"
                ? "bg-green-50 border-green-200"
                : "bg-red-50 border-red-200"
            }`}
          >
            <div className="flex items-center gap-3">
              {result.status === "verified" ? (
                <ShieldCheck className="w-8 h-8 text-green-600" />
              ) : (
                <ShieldAlert className="w-8 h-8 text-red-600" />
              )}
              <div>
                <h3
                  className={`font-bold text-lg ${
                    result.status === "verified"
                      ? "text-green-800"
                      : "text-red-800"
                  }`}
                >
                  {result.status === "verified"
                    ? "INTEGRIDAD VERIFICADA"
                    : "ADVERTENCIA: DATOS ADULTERADOS"}
                </h3>
                <p className="opacity-80 text-sm">
                  {result.status === "verified"
                    ? "El registro digital coincide exactamente con el hash original. Documento no modificado."
                    : "La huella digital no coincide. El registro ha sido modificado en la base de datos."}
                </p>
              </div>
            </div>
            <div className="text-gray-500 text-xs text-right">
              <p className="font-mono">ID: {reportId}</p>
              <p>
                Fecha: {new Date(result.timestamp).toLocaleDateString()}{" "}
                {new Date(result.timestamp).toLocaleTimeString()}
              </p>
            </div>
          </div>

          {/* Report Content */}
          <Card className="shadow-lg border-t-0 rounded-t-none">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                {result.type === "quality" ? (
                  <span className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded-full font-bold text-blue-800 text-xs">
                    <Stethoscope className="w-3 h-3" /> INCIDENCIA DE CALIDAD
                  </span>
                ) : (
                  <span className="flex items-center gap-1 bg-purple-100 px-2 py-1 rounded-full font-bold text-purple-800 text-xs">
                    <Scale className="w-3 h-3" /> REPORTE DE INTEGRIDAD
                  </span>
                )}
              </div>

              {result.type === "quality" ? (
                <QualityReportView data={result.data} />
              ) : (
                <IntegrityReportView
                  data={result.data}
                  fileUrl={result.fileUrl}
                />
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense
      fallback={
        <div className="p-20 text-center">Cargando sistema seguro...</div>
      }
    >
      <VerifyContent />
    </Suspense>
  );
}
