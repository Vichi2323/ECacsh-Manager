import { Injectable } from "@angular/core";
import { DatabaseServer2 } from "../../../models2/database-server-model2";
@Injectable({
    providedIn: 'root'
})
export class DatabaseMapper2 {

    mapGetAllIdentityUsers(entities: any[]) {
        return entities.map((entity) => this.mapGetDatabaseServer(entity));
    }

    mapGetDatabaseServer(entity: any): DatabaseServer2 {
        return {
            id: entity.id,
            name: entity.name,
            connectionString: entity.connectionString,
            isDefault: entity.isDefault,
            maxEnvironments: entity.maxEnvironments,
            numberOfEnvironments: entity.numberOfEnvironments,
            environments: entity.environments
        }
    }

    mapPostDatabaseServer(entity: any) {
        return {
            name: entity.name,
            connectionString: entity.connectionString,
            maxEnvironments: entity.maxEnvironments,
            numberOfEnvironments: entity.numberOfEnvironments

        }
    }
}