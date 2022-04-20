import { 
    Container,
    Paper,
    Box,

} from "@mui/material";

import {questions} from '../../questions/questions'
//components
import SingleSelection from '../../components/Questions/SingleSelection'
import MultiSelection from '../../components/Questions/MultiSelection'
import TextInput from '../../components/Questions/TextInput'
//Redux:
import {  useSelector } from "react-redux";
import { questionMode } from "../../redux/selectors/selectors";


const Survey = () => {
   
    const setQuestionMode = useSelector(questionMode);

    const renderQuestion = () =>{
        switch(setQuestionMode.question){
            case 1:
                return <SingleSelection question={questions[0]}/>
            case 2:
                return <MultiSelection question={questions[1]}/>
            case 3:
                return <TextInput question={questions[2]}/>
            default:
                return <SingleSelection question={questions[0]}/>
        }
    }

    return ( 
        <Container sx={{marginTop:5, marginBottom:'100px'}}>
            <Container>
                <Box>
                    <Paper sx={{display:'grid' , justifyContent:'center', alignContent:'center'}}> 
                        <Container sx={{width:'700px',marginTop:'20px'}}>
                                        {renderQuestion()}
                                       {/* <SingleSelection/>
                                       

                                         <MultiSelection/>

                                        <TextInput/>  */}
                        

                            

                        </Container>


                    
                    
                    </Paper>
                </Box>
            </Container>
        </Container>
     );
}
 
export default Survey;