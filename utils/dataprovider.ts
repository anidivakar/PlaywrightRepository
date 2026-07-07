import * as fs from 'fs';
import { parse } from 'csv-parse/sync';

export class DataProvider {

    static getTestDataFromJSON(filePath: string): any {
        try {
            let fileContent:any = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            return fileContent;
            } catch (error) {
            console.error(`Error reading JSON file at ${filePath}:`, error);
            throw error;
        }   
    }


    static getTestDataFromCSV(filePath: string): any {
        try {
            let fileContent:any = parse(fs.readFileSync(filePath, 'utf-8'),{columns: true, skip_empty_lines: true, trim: true});

            return fileContent;
        } catch (error) {
            console.error(`Error reading CSV file at ${filePath}:`, error);
            throw error;
        }   

    }

}