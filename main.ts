let x = input.lightLevel()
while (true) {
    console.log("light level:" + input.lightLevel())
    if (x > 1) {
        light.setAll(light.rgb(0, 0, 0))
    } else {
        light.clear()
    }
    
}
