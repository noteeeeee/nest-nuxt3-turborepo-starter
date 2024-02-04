import { SelectQueryBuilder } from 'typeorm';
import { VIRTUAL_COLUMN_KEY } from './decorators';

declare module 'typeorm' {
  interface SelectQueryBuilder<Entity> {
    getManyAndCountForPagination(): Promise<[Entity[], number]>;
  }
}

export function initTypeORMAddons() {
  SelectQueryBuilder.prototype.getManyAndCountForPagination = async function () {
    const { entities, raw } = await this.getRawAndEntities();
    const total = await this.getCount();

    const items = entities.map((entitiy, index) => {
      const metaInfo = Reflect.getMetadata(VIRTUAL_COLUMN_KEY, entitiy) ?? {};
      const item = raw[index];

      for (const [propertyKey, name] of Object.entries<string>(metaInfo)) {
        entitiy[propertyKey] = item[name];
      }

      return entitiy;
    });

    return [items, total];
  };
}

export * from './decorators';
export * from './transformers';