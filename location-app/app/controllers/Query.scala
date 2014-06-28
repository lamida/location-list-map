package controllers

import com.mongodb.casbah.MongoCollection
import com.mongodb.casbah.MongoClient
import play.api.Play
import com.mongodb.DBObject
import play.api.libs.json.Json
import com.mongodb.casbah.commons.MongoDBObject
import play.api.Logger

object Query {
  def getLocationCollection(): MongoCollection = {
    val mongoClient = MongoClient();
    val db = mongoClient("db2")
    db("address")
  }
  
  def query(name: String) = {
    Logger.info(s"query product id: $name")
    val col = getLocationCollection()
    // like query will only work on string so we need pattern matching here
    val q = "/.*" + name + ".*/.test(this.city)"
    val query = MongoDBObject("$where" -> q)
    col.find(query)
  }
}