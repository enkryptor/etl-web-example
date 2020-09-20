import { CbrJsonDataSource, CbrXmlDataSource } from '.';

/**
 * Источники данных обрабатываются в порядке, указанном в этом списке
 */
export const DATA_SOURCE_LIST = [
  CbrXmlDataSource,
  CbrJsonDataSource,
];
