export default function Logo({ title }) {
  return (
    <div>
      <img className="h-12 mx-auto" src="vite.svg" />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
        {title}
      </h2>
    </div>
  );
}
