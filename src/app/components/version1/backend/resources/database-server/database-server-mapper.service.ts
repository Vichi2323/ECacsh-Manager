import { Injectable } from "@angular/core";
import { DatabaseServer } from "../../../models/database-server-model";
@Injectable({
    providedIn: 'root'
})
export class DatabaseMapper {

    mapGetAllIdentityUsers(entities: any[]) {
        return entities.map((entity) => this.mapGetDatabaseServer(entity));
    }

    mapGetDatabaseServer(entity: any): DatabaseServer {
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