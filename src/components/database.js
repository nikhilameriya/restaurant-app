import React from 'react'

import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('db.db')

const getRestaurantList = () => {
  db.transaction(
    tx => {
      tx.executeSql(
        'select * from restaurantList',
        [],
        (_, { rows: { _array } }) => {
          return _array
        }
      );
    },
    (t, error) => { console.log("db error load restaurantList"); console.log(error) },
    (_t, _success) => { console.log("loaded restaurantList")}
  );
}

const insertRestaurantList = (restaurantListName, successFunc) => {
  db.transaction( tx => {
      tx.executeSql( 'insert into restaurantList (name) values (?)', [restaurantListName] );
    },
    (t, error) => { console.log("db error insertRestaurantList"); console.log(error);},
    (t, success) => { successFunc() }
  )
}

const dropDatabaseTablesAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'drop table restaurantList',
        [],
        (_, result) => { resolve(result) },
        (_, error) => { console.log("error dropping restaurantList table"); reject(error)
        }
      )
    })
  })
}

const setupDatabaseAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
        tx.executeSql(
          'create table if not exists restaurantList (id integer primary key not null, name text);'
        );
      },
      (_, error) => { console.log("db error creating tables"); console.log(error); reject(error) },
      (_, success) => { resolve(success)}
    )
  })
}

const setupRestaurantListAsync = async () => {
  return new Promise((resolve, _reject) => {
    db.transaction( tx => {
        tx.executeSql( 'insert into restaurantList (id, name) values (?,?)', [1, "john"] );
      },
      (t, error) => { console.log("db error insertRestaurantList"); console.log(error); resolve() },
      (t, success) => { resolve(success)}
    )
  })
}

export const database = {
  getRestaurantList,
  insertRestaurantList,
  setupDatabaseAsync,
  setupRestaurantListAsync,
  dropDatabaseTablesAsync,
}