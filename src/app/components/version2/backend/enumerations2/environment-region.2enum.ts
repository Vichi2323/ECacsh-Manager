import { Injectable } from "@angular/core";


export enum EnvironmentRegionEnum2 {
    UK = 0,
    NL = 1,
    DE = 2,
    MK = 3,
}

export default class EnvironmentRegionEnumeration2 {

    private enum: EnvironmentRegionEnum2;

    constructor(key: EnvironmentRegionEnum2) {
        this.enum = key;
    }

    getKey(): string {
        return EnvironmentRegionEnum2[this.enum];
    }

    getValue(): number {
        return this.enum;
    }
}