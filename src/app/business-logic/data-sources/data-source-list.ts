import { CbrJsonDataSource } from './cbr-json-data-source';
import { CbrXmlDataSource } from './cbr-xml-data-source';

/**
 * Источники данных обрабатываются в порядке, указанном в этом списке
 */
export const DATA_SOURCE_LIST = [
  CbrXmlDataSource,
  CbrJsonDataSource,
];
