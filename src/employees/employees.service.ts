import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmployeeDTO, EmployeeDTO } from './dto/employee.dto';
import { Employee, EmployeeDocument } from './schemas/employee.schema';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employee.name)
    private readonly employeeModel: Model<EmployeeDocument>,
  ) {}

  async createEmployee(data: CreateEmployeeDTO): Promise<EmployeeDTO> {
    const created = await this.employeeModel.create({
      ID: uuidv4(),
      fired: false,
      ...data,
    });
    return created.save();
  }

  async deleteEmployee(ID: string): Promise<EmployeeDTO> {
    const deleted = await this.employeeModel.findOne({ ID: ID }).exec();
    if (!deleted) {
      throw new NotFoundException(`Employee #${ID} not found`);
    }
    return deleted;
  }

  async replaceEmployee(data: EmployeeDTO): Promise<EmployeeDTO> {
    const modified = await this.employeeModel.findOneAndReplace({ ID: data.ID }, data).exec();
    if (!modified) {
      throw new NotFoundException(`Employee #${data.ID} not found`);
    }
    return modified;
  }

  async updateEmployee(ID: string, data: any): Promise<EmployeeDTO> {
    const modified = await this.employeeModel.findOneAndUpdate({ ID: ID }, data).exec();
    if (!modified) {
      throw new NotFoundException(`Employee #${data.ID} not found`);
    }
    return modified;
  }

  async allEmployees(): Promise<EmployeeDTO[]> {
    const employees = await this.employeeModel.find();
    if (!employees || employees.length == 0) {
      throw new NotFoundException(`Employees data not found`);
    }
    return employees;
  }

  async employeeByID(ID: string): Promise<EmployeeDTO> {
    const employee = await this.employeeModel.findOne({ ID: ID }).exec();
    if (!employee) {
      throw new NotFoundException(`Employee #${ID} not found`);
    }
    return employee;
  }
}
