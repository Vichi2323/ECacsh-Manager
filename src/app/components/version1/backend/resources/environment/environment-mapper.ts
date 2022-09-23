import { Injectable } from "@angular/core";
import { Environment } from "../../../models/environment-model";
@Injectable({
    providedIn: 'root'
})
export class EnvironmentMapper {

    mapGetAllIEnvironments(entities: any[]) {
        return entities.map((entity) => this.mapGetEnvironment(entity));
    }

    mapGetEnvironment(entity: any): Environment {
        return {
            id: entity.id,
            name: entity.name,
            environmentRegion: entity.environmentRegion,
            subscriptions: entity.subscriptions


        }
    }

    mapPostEnvironment(entity: any) {
        return {
            name: entity.name,
            enviormntRegion: entity.environmentRegion,
            dbServerId: entity.dbServerId
        }
    }
}