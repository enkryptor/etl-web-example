/**
 * Парсер строки в указанный формат
 */
export interface StringParser<T> {
  parse(): (input: string) => T
}
