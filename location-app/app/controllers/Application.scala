package controllers

import com.mongodb.casbah.Imports._
import play.api._
import play.api.mvc._
import play.libs.Json

object Application extends Controller {

  def index = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def getLocations = Action {
    Ok("[" + Query.getLocationCollection.mkString(",") + "]")
  }

}

