while (true) {
    console.log("light level:" + input.lightLevel())
    if (input.lightLevel() < 7) {
        light.setAll(light.rgb(0, 0, 255))
    } else {
        light.clear()
    }
    
}
