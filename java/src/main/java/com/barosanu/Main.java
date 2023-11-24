package com.barosanu;

public class Main {
    public static void main(String[] args) {
        Person person = new Person("John");
        CoolEmployee empl = new CoolEmployee("John", "john@email.com");

        System.out.println(empl.getCoolEmail());
        System.out.println(person.getName());
    }
}