import { Ethnic } from 'src/module/v1/stc/category/ethnic/ethnic.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export default class EthnicSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const reporitory = dataSource.getRepository(Ethnic);
    await reporitory.save([
      ETHNIC_KINH,
      ETHNIC_TAY,
      ETHNIC_THAI,
      ETHNIC_HOA,
      ETHNIC_KHO_ME,
      ETHNIC_MUONG,
      ETHNIC_NUNG,
      ETHNIC_HMONG,
      ETHNIC_DAO,
      ETHNIC_GIA_RAI,
      ETHNIC_NGAI,
      ETHNIC_E_DE,
      ETHNIC_BA_NA,
      ETHNIC_XO_DANG,
      ETHNIC_SAN_CHAY,
      ETHNIC_CO_HO,
      ETHNIC_CHAM,
      ETHNIC_SAN_DIU,
      ETHNIC_HRE,
      ETHNIC_MONG,
      ETHNIC_RA_GLAI,
      ETHNIC_XTIENG,
      ETHNIC_BRU_VAN_KIEU,
      ETHNIC_THO,
      ETHNIC_GIAY,
      ETHNIC_CO_TU,
      ETHNIC_GIE_TRIENG,
      ETHNIC_MA,
      ETHNIC_KHO_MU,
      ETHNIC_CO,
      ETHNIC_TA_OI,
      ETHNIC_CHO_RO,
      ETHNIC_KHANG,
      ETHNIC_XINH_MUN,
      ETHNIC_HA_NHI,
      ETHNIC_CHU_RU,
      ETHNIC_LAO,
      ETHNIC_LA_CHI,
      ETHNIC_LA_HA,
      ETHNIC_PHU_LA,
      ETHNIC_LA_HU,
      ETHNIC_LU,
      ETHNIC_LO_LO,
      ETHNIC_CHUT,
      ETHNIC_MANG,
      ETHNIC_PA_THEN,
      ETHNIC_CO_LAO,
      ETHNIC_CONG,
      ETHNIC_BO_Y,
      ETHNIC_SI_LA,
      ETHNIC_PU_PEO,
      ETHNIC_BRAU,
      ETHNIC_O_DU,
      ETHNIC_RO_MAM,
    ]);
  }
}

export const ETHNIC_KINH = {
  id: 1,
  code: 'KINH',
  name: 'Kinh',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_TAY = {
  id: 2,
  code: 'TAY',
  name: 'Tày',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_THAI = {
  id: 3,
  code: 'THAI',
  name: 'Thái',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_HOA = {
  id: 4,
  code: 'HOA',
  name: 'Hoa',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_KHO_ME = {
  id: 5,
  code: 'KHO_ME',
  name: 'Khơ-me',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_MUONG = {
  id: 6,
  code: 'MUONG',
  name: 'Mường',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_NUNG = {
  id: 7,
  code: 'NUNG',
  name: 'Nùng',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_HMONG = {
  id: 8,
  code: 'HMONG',
  name: 'HMông',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_DAO = {
  id: 9,
  code: 'DAO',
  name: 'Dao',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_GIA_RAI = {
  id: 10,
  code: 'GIA_RAI',
  name: 'Gia-rai',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_NGAI = {
  id: 11,
  code: 'NGAI',
  name: 'Ngái',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_E_DE = {
  id: 12,
  code: 'E_DE',
  name: 'Ê-đê',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_BA_NA = {
  id: 13,
  code: 'BA_NA',
  name: 'Ba na',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_XO_DANG = {
  id: 14,
  code: 'XO_DANG',
  name: 'Xơ-Đăng',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_SAN_CHAY = {
  id: 15,
  code: 'SAN_CHAY',
  name: 'Sán Chay',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_CO_HO = {
  id: 16,
  code: 'CO_HO',
  name: 'Cơ-ho',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_CHAM = {
  id: 17,
  code: 'CHAM',
  name: 'Chăm',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_SAN_DIU = {
  id: 18,
  code: 'SAN_DIU',
  name: 'Sán Dìu',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_HRE = {
  id: 19,
  code: 'HRE',
  name: 'Hrê',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_MONG = {
  id: 20,
  code: 'MONG',
  name: 'Mnông',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_RA_GLAI = {
  id: 21,
  code: 'RA_GLAI',
  name: 'Ra-glai',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_XTIENG = {
  id: 22,
  code: 'XTIENG',
  name: 'Xtiêng',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_BRU_VAN_KIEU = {
  id: 23,
  code: 'BRU_VAN_KIEU',
  name: 'Bru-Vân Kiều',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_THO = {
  id: 24,
  code: 'THO',
  name: 'Thổ',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_GIAY = {
  id: 25,
  code: 'GIAY',
  name: 'Giáy',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_CO_TU = {
  id: 26,
  code: 'CO_TU',
  name: 'Cơ-tu',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_GIE_TRIENG = {
  id: 27,
  code: 'GIE_TRIENG',
  name: 'Gié Triêng',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_MA = {
  id: 28,
  code: 'MA',
  name: 'Mạ',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_KHO_MU = {
  id: 29,
  code: 'KHO_MU',
  name: 'Khơ-mú',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_CO = {
  id: 30,
  code: 'CO',
  name: 'Co',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_TA_OI = {
  id: 31,
  code: 'TA_OI',
  name: 'Tà-ôi',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_CHO_RO = {
  id: 32,
  code: 'CHO_RO',
  name: 'Chơ-ro',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_KHANG = {
  id: 33,
  code: 'KHANG',
  name: 'Kháng',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_XINH_MUN = {
  id: 34,
  code: 'XINH_MUN',
  name: 'Xinh-mun',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_HA_NHI = {
  id: 35,
  code: 'HA_NHI',
  name: 'Hà Nhì',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_CHU_RU = {
  id: 36,
  code: 'CHU_RU',
  name: 'Chu ru',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_LAO = {
  id: 37,
  code: 'LAO',
  name: 'Lào',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_LA_CHI = {
  id: 38,
  code: 'LA_CHI',
  name: 'La Chí',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_LA_HA = {
  id: 39,
  code: 'LA_HA',
  name: 'La Ha',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_PHU_LA = {
  id: 40,
  code: 'PHU_LA',
  name: 'Phù Lá',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_LA_HU = {
  id: 41,
  code: 'LA_HU',
  name: 'La Hủ',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_LU = {
  id: 42,
  code: 'LU',
  name: 'Lự',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_LO_LO = {
  id: 43,
  code: 'LO_LO',
  name: 'Lô Lô',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_CHUT = {
  id: 44,
  code: 'CHUT',
  name: 'Chứt',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_MANG = {
  id: 45,
  code: 'MANG',
  name: 'Mảng',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_PA_THEN = {
  id: 46,
  code: 'PA_THEN',
  name: 'Pà Thẻn',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_CO_LAO = {
  id: 47,
  code: 'CO_LAO',
  name: 'Co Lao',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_CONG = {
  id: 48,
  code: 'CONG',
  name: 'Cống',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_BO_Y = {
  id: 49,
  code: 'BO_Y',
  name: 'Bố Y',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_SI_LA = {
  id: 50,
  code: 'SI_LA',
  name: 'Si La',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_PU_PEO = {
  id: 51,
  code: 'PU_PEO',
  name: 'Pu Péo',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_BRAU = {
  id: 52,
  code: 'BRAU',
  name: 'Brâu',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_O_DU = {
  id: 53,
  code: 'O_DU',
  name: 'Ơ Đu',
  isFreeze: true,
} as Ethnic;
export const ETHNIC_RO_MAM = {
  id: 54,
  code: 'RO_MAM',
  name: 'Rơ măm',
  isFreeze: true,
} as Ethnic;
