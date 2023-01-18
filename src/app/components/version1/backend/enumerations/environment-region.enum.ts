

export enum EnvironmentRegionEnum {
    UK = 0,
    NL = 1,
    DE = 2,
    MK = 3,
}

export default class EnvironmentRegionEnumeration {

    private enum: EnvironmentRegionEnum;

    constructor(key: EnvironmentRegionEnum) {
        this.enum = key;
    }

    getKey(): string {
        return EnvironmentRegionEnum[this.enum];
    }

    getValue(): number {
        return this.enum;
    }
}