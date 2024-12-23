package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Static("/static", "./static")
	r.LoadHTMLGlob("templates/*")

	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", nil)
	})

	r.GET("/register", func(c *gin.Context) {
		c.HTML(http.StatusOK, "register.html", nil)
	})

	r.GET("/consent", func(c *gin.Context) {
		c.HTML(http.StatusOK, "consent.html", nil)
	})

	r.Run(":8080") // Run on localhost:8080
	fmt.Println("Server is running on port 8080")
}
