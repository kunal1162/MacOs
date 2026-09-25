import React, { useEffect, useRef, useState } from "react";
import "./cli.scss";
import MacWindow from "./MacWindow";

const Cli = ({ windowName, setWindowsState }) => {
  const outputRef = useRef(null);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    "Welcome to Kunal's Portfolio Terminal",
    "===================================",
    "Type 'help' to see all available commands.",
    "",
    "Available commands:",
    "help, about, skills, projects, contact, github, resume, ls, pwd, whoami, clear"
  ]);

  const commands = {
    help: () =>
      [
        "Available commands:",
        "  help       Show all portfolio commands",
        "  about      Learn a little about me",
        "  skills     View my tech stack",
        "  projects   See featured work",
        "  contact    Get in touch",
        "  github     Open my GitHub profile",
        "  resume     Quick resume snapshot",
        "  ls         List portfolio folders",
        "  pwd        Show current directory",
        "  whoami     Show current user",
        "  clear      Clear the terminal"
      ].join("\n"),

    about: () =>
      "I'm a frontend developer focused on creating clean, responsive, and user-friendly digital experiences.",

    skills: () =>
      "Frontend: React, JavaScript, HTML, CSS, SCSS\nBackend: Node.js, Express\nTools: Git, Vite, VS Code, Figma",

    projects: () =>
      "1. MacOS Portfolio UI\n2. Dashboard & Analytics App\n3. Personal Branding Website\n4. Productivity Workspace Tool",

    contact: () =>
      "Email: hello@kunal.dev\nLinkedIn: linkedin.com/in/kunal\nLocation: India",

    github: () => "GitHub: github.com/kunal",

    resume: () =>
      "Frontend developer with experience in UI design, reusable component architecture, and polished user experiences.",

    ls: () => "Desktop  Documents  Downloads  Projects  Portfolio",

    pwd: () => "/Users/kunal/portfolio",

    whoami: () => "kunal",

    clear: () => "CLEAR"
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (event) => {
    if (event.key !== "Enter") return;

    const command = input.trim().toLowerCase();

    if (!command) return;

    const commandAction = commands[command];

    if (commandAction) {
      const result = commandAction();

      if (result === "CLEAR") {
        setHistory([]);
      } else {
        setHistory((prev) => [...prev, `kunal:~$ ${command}`, result]);
      }
    } else {
      setHistory((prev) => [
        ...prev,
        `kunal:~$ ${command}`,
        `zsh: command not found: ${command}`
      ]);
    }

    setInput("");
  };

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <div className="cli-output" ref={outputRef}>
          {history.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <div className="cli-input-line">
          <span className="cli-prompt">kunal:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            autoFocus
          />
        </div>
      </div>
    </MacWindow>
  );
};

export default Cli;