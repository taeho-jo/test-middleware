export interface RespondentCharacteristicsListType {
  ageGradeInfoList: RespondentCharacteristicsType[];
  cellInfoList: RespondentCharacteristicsType[];
  deviceInfoList: RespondentCharacteristicsType[];
  genderInfoList: RespondentCharacteristicsType[];
}
export interface RespondentCharacteristicsType {
  name: string;
  count: number;
  value: number;
}
