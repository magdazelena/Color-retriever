# Copyrightagent code-challenge
My solution to the code challenge

### Scenario
A developer has tried to do a task that you must now take over and complete.
The task has been extended with additional requirements after the developer left.
You should use best practices in order to make the code easy to understand, maintain and extend.

The API mock must not be changed and must be used.

### Requirements
- It must be possible to run the program and get back the colors green, blue and red in HEX format.
- It must be possible to define the colors using their names like red, blue and green.
- It must be possible to define the order the colors are returned.
##### Additional requirements
- The program must also support the colors white and black.
- The program must also return the RGB values.

# How it works
Returns the ask colors in specific format.
**Colors**: blue, white, green, black, red.
**Possible formats**: RGB, HEX, both. 

# How to use it:
1. Run the program using:
```
npm run-script run
```
You will be prompted for more information

2. Run the program using:
```
npm run-script get-colors [args]
```
to instantly get results. 
Args can be:
- `default` to get colors green, blue and red in hex format
- color names separated by space to get specific colors in specific order in hex format, ex: `blue red white`
- color names separated by space and output type; works as above but you can get more information like RGB or all the formats with the name. Possible values: `all`, `rgb`, `hex`. Example: `blue red white rgb`
