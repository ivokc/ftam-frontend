




const DictUtility = {
  getDictValue(dict,code){
    let hit = dict.items.find((e) => e.code == code);
    
    return hit ? hit.name : code;
  },

   
};
export default DictUtility;