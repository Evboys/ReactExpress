export default function ForbiddenPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center text-center">
      <div>
        <h1 className="text-5xl font-bold text-red-500">403</h1>
        <p className="text-zinc-400 mt-4">
          Vous n’avez pas les droits pour accéder à cette page.
        </p>
      </div>
    </div>
  );
}
