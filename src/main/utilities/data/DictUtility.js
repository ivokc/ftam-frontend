




const DictUtility = {
  getDictValue(dict,code){
    let hit = dict.items.find((e) => e.code == code);
    return hit.name;
  },

   
};
export default DictUtility;