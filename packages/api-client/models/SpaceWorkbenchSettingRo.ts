/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Space Management - Workbench Set Request Parameters
*/
export class SpaceWorkbenchSettingRo {
    /**
    * All members of the node can be exported
    */
    'nodeExportable'?: boolean;
    /**
    * Global Watermark On Status
    */
    'watermarkEnable'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nodeExportable",
            "baseName": "nodeExportable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "watermarkEnable",
            "baseName": "watermarkEnable",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SpaceWorkbenchSettingRo.attributeTypeMap;
    }

    public constructor() {
    }
}
