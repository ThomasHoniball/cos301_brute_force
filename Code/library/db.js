/**
 *  File Name: db.js (path: library/db.js)
 *  Version: 1.0
 * 	Author: Brute Force - Database Management
 * 	Project: Indoor Mall Navigation
 * 	Organisation: DVT
 *  Copyright: (c) Copyright 2019 University of Pretoria
 *  Related Documents: Scan, Register, Login
 * 	
 * 	Update History:
 * 
 *  Date		Author		Changes
 * 	--------------------------------------------
 * 	10/04/2019 	Thomas		Original
 * 
 * 	Functional Description: This program file establishes a database connection with the database
 * 	Error Messages: Database Connection Failed
 * 	Constraints: Can only be used to connect to database
 * 	Assumptions: It is assumed that the database connect will be established
 * 
 */

//import { SQLite } from 'expo';





/**
 * Purpose		: This class is used to establish a database connection with SQLite
 * 
 * Description	: The class creates and establishes one connection to the database to allow following methods to alter the database using the already established connection.
 * 
 * Usgae
 */

/*export default class dbconnection{
	database: null;
	created: false;
	filled: false;
	open: false;
*/
/**
 * Purpose		: A constructor that creates the database connection
 * 
 * Description	: Establishes connection with SQLite database
 * 
 * Usgae
 */
/*	constructor(props)
	{
		this.database = SQLite.openDatabase("indoors");
		this.open = true;
		//console.log("opened");
		this.dropTable();
		this.buildTable();
		this.fillTable();
		//console.log(this.created);
	}

	checkStatus(property = "all"){
		if(property == "all")
		{
			return [this.open, this.created, this.filled];
		}else if(property == "open")
		{
			return this.open;
		}else if(property == "created")
		{
			return this.created;
		}else if(property == "filled")
		{
			return this.filled;
		}else
		{
			return false;
		}

	}
	dropTable (){
		this.database.transaction(tx => {
			tx.executeSql(
				"DROP TABLE IF EXISTS tbl_items",
				[],
				(tx, success)=>{console.log("DB created");}, 
				(tx, error)=>{console.log("DB create error " + error);}
			);
		});
	}

	buildTable (){
		this.database.transaction(tx => {
			tx.executeSql(
				"CREATE TABLE IF NOT EXISTS tbl_items('barcode_id' INTEGER PRIMARY KEY,'name' TEXT(50) )",
				[],
				(tx, success)=>{console.log("DB created");}, 
				(tx, error)=>{console.log("DB create error " + error);}
			);
		});
	}
	fillTable (){
		this.database.transaction(tx => {
			tx.executeSql(
				"INSERT INTO tbl_items(barcode_id, name)VALUES(1, 'Shoes'), (2, 'Sweater'), (3, 'Hoody'), ('60097736', 'Zam-Buk')",
				[],
				(tx, success)=>{console.log("DB Filled");}, 
				(tx, error)=>{console.log("DB fill error " + error);}
			);
		});
	}

	checkBarcode(barcode) {
		alert(barcode)
		this.database.transaction(tx => {
			tx.executeSql(
				"SELECT * FROM tbl_items WHERE barcode_id = ?",
				[barcode],
				(tx, success)=>{alert(success.rows.item(0).name)}, 
				(tx, error)=>{alert("failed to query " + error)}
			);
		});
	}
}
*/

