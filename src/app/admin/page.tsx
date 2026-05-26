"use client";

import { useState, useEffect } from "react";
import type { Proyecto } from "@/lib/types";
import {
  getProyectos,
  createProyecto,
  updateProyecto,
  deleteProyecto,
} from "@/lib/supabase";
import { verificarLogin } from "./actions";

const emptyForm: Omit<Proyecto, "id" | "created_at"> = {
  titulo: "",
  descripcion: "",
  tecnologias: [],
  url_vercel: "",
  url_github: "",
  url_demo: "",
  destacado: false,
};

export default function AdminPage() {
  const [autenticado, setAutenticado] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [techInput, setTechInput] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (autenticado) {
      setCargando(true);
      getProyectos()
        .then(setProyectos)
        .catch((e) => setError(e.message))
        .finally(() => setCargando(false));
    }
  }, [autenticado]);

  const handleLogin = async () => {
    const result = await verificarLogin(username, password);
    if (result.success) {
      setAutenticado(true);
      setUsername("");
      setPassword("");
      setError("");
    } else {
      setError(result.error || "Error de autenticación");
    }
  };

  const addTech = () => {
    const t = techInput.trim();
    if (t && !form.tecnologias.includes(t)) {
      setForm({ ...form, tecnologias: [...form.tecnologias, t] });
      setTechInput("");
    }
  };

  const removeTech = (tech: string) => {
    setForm({
      ...form,
      tecnologias: form.tecnologias.filter((t) => t !== tech),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.titulo || !form.descripcion) return;
    setCargando(true);
    setError("");

    try {
      if (editId) {
        const actualizado = await updateProyecto(editId, form);
        setProyectos((prev) =>
          prev.map((p) => (p.id === editId ? actualizado : p))
        );
      } else {
        const nuevo = await createProyecto(form);
        setProyectos((prev) => [nuevo, ...prev]);
      }
      setForm(emptyForm);
      setEditId(null);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Error al guardar");
    } finally {
      setCargando(false);
    }
  };

  const handleEdit = (p: Proyecto) => {
    setForm({
      titulo: p.titulo,
      descripcion: p.descripcion,
      tecnologias: p.tecnologias,
      url_vercel: p.url_vercel || "",
      url_github: p.url_github || "",
      url_demo: p.url_demo || "",
      destacado: p.destacado,
    });
    setEditId(p.id);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("¿Eliminar este proyecto?")) return;
    setCargando(true);
    setError("");

    try {
      await deleteProyecto(id);
      setProyectos((prev) => prev.filter((p) => p.id !== id));
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Error al eliminar");
    } finally {
      setCargando(false);
    }
  };

  if (!autenticado) {
    return (
      <div className="pt-28 pb-20 px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-[#CBD5E1] mb-6">
            <span className="text-sky-400 font-mono">/</span> Admin
          </h1>
          <div className="p-6 rounded-xl bg-[#1E293B] border border-[#334155] space-y-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              placeholder="Usuario"
              className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-[#334155] text-[#CBD5E1] placeholder:text-[#475569] focus:outline-none focus:border-sky-500"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              placeholder="Contraseña"
              className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-[#334155] text-[#CBD5E1] placeholder:text-[#475569] focus:outline-none focus:border-sky-500"
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              onClick={handleLogin}
              className="w-full px-4 py-2 rounded-lg bg-sky-500 text-white font-medium hover:bg-sky-400 transition-colors"
            >
              Ingresar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-[#CBD5E1] mb-6">
          <span className="text-sky-400 font-mono">/</span> Admin — Proyectos
        </h1>

        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-xl bg-[#1E293B] border border-[#334155] mb-10 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-[#64748B] font-mono mb-1 block">
                Título *
              </label>
              <input
                value={form.titulo}
                onChange={(e) => setForm({ ...form, titulo: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#0F172A] border border-[#334155] text-[#CBD5E1] text-sm focus:outline-none focus:border-sky-500"
                required
              />
            </div>
            <div className="flex items-end gap-2">
              <label className="flex items-center gap-2 text-sm text-[#94A3B8] cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.destacado}
                  onChange={(e) =>
                    setForm({ ...form, destacado: e.target.checked })
                  }
                  className="accent-sky-500"
                />
                Destacado
              </label>
            </div>
          </div>

          <div>
            <label className="text-xs text-[#64748B] font-mono mb-1 block">
              Descripción *
            </label>
            <textarea
              value={form.descripcion}
              onChange={(e) =>
                setForm({ ...form, descripcion: e.target.value })
              }
              rows={3}
              className="w-full px-3 py-2 rounded-lg bg-[#0F172A] border border-[#334155] text-[#CBD5E1] text-sm focus:outline-none focus:border-sky-500 resize-none"
              required
            />
          </div>

          <div>
            <label className="text-xs text-[#64748B] font-mono mb-1 block">
              Tecnologías
            </label>
            <div className="flex gap-2 mb-2">
              <input
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && (e.preventDefault(), addTech())
                }
                placeholder="Ej: Next.js"
                className="flex-1 px-3 py-2 rounded-lg bg-[#0F172A] border border-[#334155] text-[#CBD5E1] text-sm focus:outline-none focus:border-sky-500"
              />
              <button
                type="button"
                onClick={addTech}
                className="px-3 py-2 rounded-lg bg-[#334155] text-[#CBD5E1] text-sm hover:bg-[#475569] transition-colors"
              >
                +
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.tecnologias.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2 py-1 rounded-md border border-sky-500/20 flex items-center gap-1"
                >
                  {tech}
                  <button
                    type="button"
                    onClick={() => removeTech(tech)}
                    className="text-red-400 hover:text-red-300"
                  >
                    x
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs text-[#64748B] font-mono mb-1 block">
                URL Vercel
              </label>
              <input
                value={form.url_vercel}
                onChange={(e) =>
                  setForm({ ...form, url_vercel: e.target.value })
                }
                className="w-full px-3 py-2 rounded-lg bg-[#0F172A] border border-[#334155] text-[#CBD5E1] text-sm focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label className="text-xs text-[#64748B] font-mono mb-1 block">
                URL GitHub
              </label>
              <input
                value={form.url_github}
                onChange={(e) =>
                  setForm({ ...form, url_github: e.target.value })
                }
                className="w-full px-3 py-2 rounded-lg bg-[#0F172A] border border-[#334155] text-[#CBD5E1] text-sm focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label className="text-xs text-[#64748B] font-mono mb-1 block">
                URL Demo
              </label>
              <input
                value={form.url_demo}
                onChange={(e) =>
                  setForm({ ...form, url_demo: e.target.value })
                }
                className="w-full px-3 py-2 rounded-lg bg-[#0F172A] border border-[#334155] text-[#CBD5E1] text-sm focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={cargando}
              className="px-6 py-2 rounded-lg bg-sky-500 text-white text-sm font-medium hover:bg-sky-400 transition-colors disabled:opacity-50"
            >
              {cargando ? "Guardando..." : editId ? "Actualizar" : "Agregar proyecto"}
            </button>
            {editId && (
              <button
                type="button"
                onClick={() => {
                  setForm(emptyForm);
                  setEditId(null);
                }}
                className="px-6 py-2 rounded-lg bg-[#334155] text-[#CBD5E1] text-sm hover:bg-[#475569] transition-colors"
              >
                Cancelar
              </button>
            )}
          </div>
        </form>

        {error && (
          <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
        )}

        <div className="space-y-3">
          {cargando && proyectos.length === 0 && (
            <p className="text-center text-[#64748B] py-8">Cargando...</p>
          )}
          {!cargando && proyectos.length === 0 && (
            <p className="text-center text-[#64748B] py-8">
              No hay proyectos. Agrega tu primer proyecto arriba.
            </p>
          )}
          {proyectos.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between p-4 rounded-lg bg-[#1E293B] border border-[#334155]"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-[#CBD5E1] truncate">
                  {p.titulo}
                </h3>
                <p className="text-xs text-[#64748B] truncate mt-0.5">
                  {p.tecnologias.join(", ")}
                </p>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={() => handleEdit(p)}
                  className="px-3 py-1.5 text-xs rounded-lg bg-[#334155] text-[#94A3B8] hover:bg-sky-500/20 hover:text-sky-400 transition-colors"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  disabled={cargando}
                  className="px-3 py-1.5 text-xs rounded-lg bg-[#334155] text-[#94A3B8] hover:bg-red-500/20 hover:text-red-400 transition-colors disabled:opacity-50"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
