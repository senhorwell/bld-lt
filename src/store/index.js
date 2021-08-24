import {createStore} from 'vuex';

const store = createStore({
  state(){
    return {
      memories: [
        {
            id:'1',
            image: "https://cdn.autopapo.com.br/box/uploads/2021/01/19224834/caminhao-volvo-fh-pode-ser-lancado-no-brasil-em-2021-scaled.jpg",
            title:'Caminhão adicionado via dados',
            description:'Caminhão 2013 em ótimo estado'
        },
        {
            id:'2', 
            image: "https://i1.wp.com/trucao.com.br/wp-content/uploads/2020/09/caminhao_mais_potente_destaque.jpg?fit=1920%2C1080&ssl=1",
            title:'Caminhão 2013',
            description:'Em ótimo estado'
        },
      ]
    };
  },
  mutations: {
    addMemory(state,memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description
      };

      state.memories.unshift(newMemory);
    }
  },
  actions: {
    addMemory(context,memoryData) {
      context.commit('addMemory',memoryData);
    }
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