import { FacebookLogo, InstagramLogo, LinkedinLogo, Sun } from "phosphor-react";
import Botao from "./components/Botao/Botao";

function App() {
  return (
    <main className="h-screen w-full overflow-hidden">
      <header className="flex justify-end p-4">
        <button className="p-2 hover:bg-gray-200 text-black rounded-lg cursor-pointer transition-all duration-300">
          <Sun size={16} />
        </button>
      </header>

      <main className="h-full w-full flex justify-center items-center">
        <section className="border rounded-lg border-gray-400 min-w-96 flex items-center justify-center gap-4 p-6 flex-col">
          <img
            src="https://github.com/gabrielangelo0.png"
            alt="Foto de perfil"
            className="h-32 w-32 rounded-full border-4 border-gray-300"
          />

          <h1 className="font-bold text-2xl">Gabriel Angelo</h1>
          <p className="text-slate-500">Desenvolvedor Full Stack</p>

          <section className="w-full space-y-4">
            <Botao>
              <a
                target="_blank"
                href="https://www.instagram.com/gabriel.angelo__/"
                className="flex items-center gap-4 w-full h-full px-4 py-2 justify-center"
              >
                <InstagramLogo size={32} />
                <p>Instagram</p>
              </a>
            </Botao>
            <Botao>
              <a
                target="_blank"
                href="https://www.instagram.com/gabriel.angelo__/"
                className="flex items-center gap-4 w-full h-full px-4 py-2 justify-center"
              >
                <LinkedinLogo size={32} />
                <p>LinkedIn</p>
              </a>
            </Botao>
            <Botao>
              <a
                target="_blank"
                href="https://www.instagram.com/gabriel.angelo__/"
                className="flex items-center gap-4 w-full h-full px-4 py-2 justify-center"
              >
                <FacebookLogo size={32} />
                <p>Facebook</p>
              </a>
            </Botao>
          </section>
        </section>
      </main>
    </main>
  );
}

export default App;
