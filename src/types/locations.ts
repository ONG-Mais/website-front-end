type Region = {
  id: number;
  sigla: string;
  nome: string;
};

export type State = {
  id: number;
  sigla: string;
  nome: string;
  regiao: Region;
};

export type City = {
  id: number;
  nome: string;
  microrregiao: {
    id: number;
    nome: string;
    mesorregiao: {
      id: number;
      nome: string;
      uf: {
        id: number;
        nome: string;
        sigla: string;
        regiao: Region;
      };
    };
  };
};

export type UserLocation = {
  city: City;
  state: State;
};
