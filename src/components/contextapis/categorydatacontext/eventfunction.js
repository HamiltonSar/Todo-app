//Validation 

export const Category_data = ( categorydata , categoryState , messagecollection ) => {
    if(categorydata.length <= 0) categoryState.message = messagecollection.emptymessage;
    else if(categorydata.length <= 3) categoryState.message = messagecollection.tooshortmessage;
    else if(categorydata.length >= 24) categoryState.message = messagecollection.toolargemessage;
    else categoryState.message = messagecollection.validmessage;
}

//Modidying Component 

export const Modifying_Data = ( datamodified , categoryState ) => {
    return categoryState.adddatacategory = datamodified;

}