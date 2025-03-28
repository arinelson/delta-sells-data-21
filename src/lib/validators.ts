
import { z } from "zod";

// Form validation schema
export const formSchema = z.object({
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
  telefone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Telefone inválido"),
  genero: z.enum(["Masculino", "Feminino", "Outro"]),
  tipo: z.string().min(1, "Tipo é obrigatório"),
  cor: z.string().min(1, "Cor é obrigatória"),
  tamanho: z.string().min(1, "Tamanho é obrigatório"),
  valor: z.string().min(1, "Valor é obrigatório"),
  formaPagamento: z.enum(["PIX", "Débito", "Crédito", "Dinheiro"]),
  localizacao: z.string().optional(),
  frete: z.string().min(1, "Frete é obrigatório"),
  dataPagamento: z.string().regex(/^\d{2}\/\d{2}\/\d{2}$/, "Data de pagamento inválida"),
  dataEntrega: z.string().regex(/^\d{2}\/\d{2}\/\d{2}$/, "Data de entrega inválida"),
  valorTotal: z.string().min(1, "Valor total é obrigatório"),
  observacao: z.string().optional()
});

export type FormValues = z.infer<typeof formSchema>;
