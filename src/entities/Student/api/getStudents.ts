import { EInternshipStatus } from '../models/types';

import { api, RequestConfig } from '@/shared/api';
import { EStudentStatus, IStudent } from '@/entities/Student';

export type GetStudentsConfig = RequestConfig;
export const getStudents = ({ config }: GetStudentsConfig) =>
  api.get<IStudent[]>('/student/get-student', config);

const mockStudents: IStudent[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440001',
    name: 'Иван',
    surname: 'Петров',
    middlename: 'Сергеевич',
    email: 'ivan.petrov@example.com',
    phone: '+7 (999) 123-45-67',
    isHeadMan: true,
    status: EStudentStatus.InProcess,
    groupNumber: 101,
    course: 2,
    internshipStatus: EInternshipStatus.UnderSecondGrade,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440002',
    name: 'Мария',
    surname: 'Иванова',
    middlename: 'Александровна',
    email: 'maria.ivanova@example.com',
    phone: '+7 (999) 234-56-78',
    isHeadMan: false,
    status: EStudentStatus.InProcess,
    groupNumber: 101,
    course: 2,
    internshipStatus: EInternshipStatus.UnderSecondGrade,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440003',
    name: 'Алексей',
    surname: 'Сидоров',
    middlename: 'Дмитриевич',
    email: 'alexey.sidorov@example.com',
    phone: '+7 (999) 345-67-89',
    isHeadMan: false,
    status: EStudentStatus.OnAcademicLeave,
    groupNumber: 102,
    course: 3,
    internshipStatus: EInternshipStatus.InSearch,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440004',
    name: 'Елена',
    surname: 'Козлова',
    middlename: 'Викторовна',
    email: 'elena.kozlova@example.com',
    phone: '+7 (999) 456-78-90',
    isHeadMan: false,
    status: EStudentStatus.Graduated,
    groupNumber: 103,
    course: 4,
    internshipStatus: EInternshipStatus.GotInternship,
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440005',
    name: 'Дмитрий',
    surname: 'Морозов',
    middlename: 'Андреевич',
    email: 'dmitry.morozov@example.com',
    phone: '+7 (999) 567-89-01',
    isHeadMan: false,
    status: EStudentStatus.Expelled,
    groupNumber: 104,
    course: 1,
    internshipStatus: EInternshipStatus.UnderSecondGrade,
  },
];

export const getStudentsMock = ({
  config,
}: GetStudentsConfig): Promise<{ data: IStudent[] }> => {
  console.log('Mock config:', config);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: mockStudents });
    }, 300);
  });
};
