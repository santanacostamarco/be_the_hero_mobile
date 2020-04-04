export default function currency (value, currency) {
  return Intl.NumberFormat('pt-BR', { style: 'currency', currency: currency }).format(value)
}