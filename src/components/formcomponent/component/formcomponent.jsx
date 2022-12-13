import React from 'react'
import { DatePicker } from '@material-ui/pickers';
import styles from "./../styles/formcomponent.module.css";





function FormComponent () {

  return (

    <div className= {styles.formcomponentcontainer} >

        <div className = {styles.titleformcontainer}>
            <h2 className= {styles.titleform} >Define a task</h2>
        </div>

        <div className= {styles.formcontainer} >
            <form className= {styles.form} >

                <div className= {styles.inputscontainer}>
                    <label className= {styles.label} htmlFor="">Title</label>
                    <input className= {styles.inputs} type="text" />
                </div>

                <div className= {styles.inputscontainer}>
                    <textarea className= {styles.textarea} placeholder = "Add and description of your task..." name="" id="" ></textarea>
                </div>

                <div className= {styles.inputscontainer}>
                    <label className= {styles.label} htmlFor="">Mark as</label>
                    <select className= {styles.selectopt} >
                        <option className= {styles.option1} >Normal</option>
                        <option  className= {styles.option2} >Urgent!</option>
                    </select>
                </div>
                <div className= {styles.inputscontainer}>
                    <label className= {styles.label} htmlFor="">For</label>
                    <div><DatePicker size='100%'/></div>
                </div>

                <div className= {styles.buttoncontainer}>
                    <button className= {styles.buttonsend}>Add</button>
                </div>


            </form>
            

        </div>

        
        
    </div>
  )
}

export default FormComponent;


