while (true) {
    console.log("light level:" + input.lightLevel())
    if (input.lightLevel() < 9) {
        light.setAll(light.rgb(0, 0, 255))
    } else if (input.lightLevel() > 500) {
        light.setAll(light.rgb(255, 255, 0))
    } else {
        light.clear()
    }
    
}
