import {createStore} from 'vuex';

const store = createStore({
  state(){
    return {
      memories: [
        {
            id:'1',
            image: "https://www.hypeness.com.br/1/2019/10/cenas-surreais-animais-e-natureza-6.jpg",
            title:'A trip into the mountains',
            description:'It was a really nice trip!'
        },
        {
            id:'2', 
            image: "https://www.hypeness.com.br/1/2019/10/cenas-surreais-animais-e-natureza-5.jpg",
            title:'A trip into the mountains 2',
            description:'It was a really nice trip!'
        },
        {
            id:'3', 
            image: "https://www.hypeness.com.br/1/2019/10/cenas-surreais-animais-e-natureza-4.jpg",
            title:'A trip into the mountains 3',
            description:'It was a really nice trip!'
        },
        {
            id:'4', 
            image: "https://www.hypeness.com.br/1/2019/10/cenas-surreais-animais-e-natureza-2.jpg",
            title:'A trip into the mountains 4',
            description:'It was a really nice trip!'
        },
      ]
    };
  },
  getters: {
    memories(state){
      return state.memories;
    },
    memory(state){
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    }
  }
});

export default store;