let x = input.lightLevel()
while (true) {
    console.log("light level:" + input.lightLevel())
    if (x > 7) {
        light.setAll(light.rgb(255, 0, 0))
    } else {
        light.clear()
    }
    
}
