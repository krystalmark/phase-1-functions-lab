function distanceFromHqInBlocks(Blocks){
    if (Blocks===43) {
        return(43-42)
        
    } else {
        return(50 -42)
    }
}

function distanceFromHqInFeet(feet){
    if (feet === 43) {
        return((43-42)*264)
        
    } else {
        return((50-42)*264)
    }
}

function distanceTravelledInFeet(x,y){
    if (y>x) {
        return((y-x)*264)
        
    } else {
        return((x-y)*264)
    }    
}

function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start,destination);
    if (distance <=400 && distance < 2000) {
        return((0));
        
    }

    if (distance >=400 && distance <=2000) {
        return((528-400)*0.02)

    } else if (distance >=2000 && distance <=2500){
        return((25))
    }

    if (distance > 2500) {
        return "cannot travel that far"
    }
        
    }