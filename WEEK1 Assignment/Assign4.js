function Score(mark)
{
    
    switch(true){
        case (mark>=90):
            return "Grade A"
            break;
        case mark>=70 && mark<90:
            return "Grade B"
            break;
        
        case mark>=50 && mark<70:
            return "Grade c"
            break;
        default:
            return "Grade F"

    }

}


console.log(Score(70))