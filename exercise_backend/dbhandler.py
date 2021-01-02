import sqlite3
import base64
from socket import *
import sys

#db exercise table details

def insert_details(first_name, last_name, dob, mail, phone, fund, amount):
    connection = sqlite3.connect("exercise.db")
    cursor = connection.cursor()
    cursor.execute("SELECT max(contact_id) FROM details")
    data = cursor.fetchall()
    print(data)
    contact_id = data[0][0] + 1
    print(contact_id)
    ret = -1
    ret = cursor.execute("INSERT INTO details VALUES(?, ?, ?, ?, ?, ?, ?, ?)", (contact_id, first_name, last_name, dob, mail, phone, fund, amount))
    connection.commit()
    connection.close()
    return ret

def view_details():
    connection = sqlite3.connect("exercise.db")
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM details where contact_id > 0")
    data = cursor.fetchall()
    return data