import { Controller, Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDTO, EmployeeDTO } from './dto/employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get('/list')
  async employeesList() {
    try {
      const employees = await this.employeesService.allEmployees();
      return employees.map((employee) => {
        return {
          ID: employee.ID,
          fullName: employee.fullName,
        };
      });
    } catch (e) {
      return e;
    }
  }

  @Post('/new')
  async createEmployee(@Body() data: CreateEmployeeDTO) {
    return await this.employeesService.createEmployee(data);
  }

  @Get('/:id')
  async employeeById(@Param('id') ID: string) {
    try {
      return await this.employeesService.employeeByID(ID);
    } catch (e) {
      return e;
    }
  }

  @Put('/:id')
  async modifyEmployee(@Body() data: EmployeeDTO) {
    try {
      return await this.employeesService.replaceEmployee(data);
    } catch (e) {
      return e;
    }
  }

  @Delete('/:id')
  async fireEmployee(@Param('id') ID: string) {
    try {
      return await this.employeesService.updateEmployee(ID, { fired: true });
    } catch (e) {
      return e;
    }
  }
}
