x=input.light_level()
while True:
    print("light level:"+ input.light_level())
    if x > 1: 
        light.set_all(light.rgb(0, 0, 0))
    else:
         light.clear()   