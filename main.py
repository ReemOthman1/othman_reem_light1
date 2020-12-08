x=input.light_level()
while True:
    print("light level:"+ input.light_level())
    if x > 4: 
        light.set_all(light.rgb(255, 0, 0))
    else:
         light.clear()   