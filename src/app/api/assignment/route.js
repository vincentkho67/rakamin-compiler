import { runInContext } from "node:vm";
import vm from "vm"
import { User, Assignment } from "../../../database/models/index"

export async function POST(req) {
  const data = await req.json();
  const codes = data.code;

  // Create a new vm.Context object
  const context = vm.createContext();

  context.consoleLogOutput = []; // Added an array to store console.log output

  context.console = {
    log: (...args) => {
      context.consoleLogOutput.push(...args);
    },
  };

  try {
    // Run the code in the context
    runInContext(codes, context);
  } catch (error) {
    return new Response('Error executing code', { status: 500 });
  }

  // Include console.log output in the response
  return new Response(JSON.stringify({ data: context.consoleLogOutput }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function GET(req) {
  const { id } = req.params;
  const assignment = await Assignment.findByPk(id);
  return new Response(JSON.stringify(assignment), {
    headers: { 'Content-Type': 'application/json' },
  });
}
