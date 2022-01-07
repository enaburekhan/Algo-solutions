# def avg_function(test1=55, test2=90, test3=75)

#     average = (test1 + test2 + test3)/3

#     return puts average

# end

#  avg_function(40)

# def removeDuplicate(nums)
#   return 0 if(nums.size == 0)
  
#   i = 0
#   j = 1
#   while j < nums.size
#     if(nums[i] != nums[j])
#         i += 1
#         nums[i] = nums[j]
#         j += 1
#     else
#         j += 1
#     end
#   end
#    i+1
# end

# input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

# p removeDuplicate(input)

# first_name = "Eric"
# last_name = "Enaburekhan"

# puts "#{first_name} #{last_name}"

# p "many words".chars

# "many words".each_char { |ch| puts ch }
# p "ascii".chars.map(&:ord)

# str = "my cat is black"
# str.freeze
# str[0] = ""

# p str

# users = %w(john mary luke)

# users.each {|item| puts item }

# users.map { |item| puts item.capitalize }
# puts
# users.map { |item| puts item.downcase }

# p [[1, 2, 3], [4, 5, 6]].flat_map { |val| val.inject(:+) }

# numbers = [3, 7, 12, 2, 49]
# p numbers.select {|n| n > 10 }

list = [1,1,2,2,2,3,3,3,3,4,4,4]
# p list.uniq

# p list.sample
# p list.take(3)
# p list.slice(0, 3)
# p list.slice(0...3)

# splat = *[1,2],3
# p splat

# a = [2,3,4]
# b = [2,4,5]
# p a & b
# p a | b

# h = {water: 300, oil: 100}

#  h.each { |key, value| p "The key is #{key} with value #{value}" }   

#  p h.keys
#  p h.values

# str = "aabbbaa"

# count = {}
# str.each_char do |c|
#   if count.key?(c) 
#     count[c] += 1
#   else
#     count[c] = 1
#   end
# end

# puts count

# p (2..15).step(2).to_a

# ages = [2, 5, 10, 15]
# p ages.class
# p 5.class
# p Array.class
# p String.class
# p Class.class
# p Array.ancestors

# def print_twice
#   yield 1
#   yield 2
#   yield 3  
# end

# print_twice { |num| puts num*10 }

# say_something = -> { puts "this is lambda" }

# say_something.call

# times_two = -> (x){ x * 2 }

# p times_two.call(10)

# def call_proc(my_proc)
#   count = 500
#   my_proc.call
# end
# count = 1
# my_proc = Proc.new { puts count }
# p call_proc(my_proc)

# p ['cat', 'dog'].map(&:upcase)


# "abcdefgh".tr("b", { "b" => "c" })

# p "abcdefgh".tr("b","c")
# class Cat
# end

# animal = Cat.new

# first_name = "Eric"
# last_name = "Enaburekhan"

# p first_name + " " + last_name

# name = "cat"
# p "Hello nice #{name} you here"

# report = ""
# report << "concatenating"
# report << " strings"
# report << " all day"
# p report

# names_with_ages =
# [
# ["john", 20],
# ["peter", 30],
# ["david", 40]
# ]
# names_with_ages.each do |name, age|
# puts "#{name}    #{age}"
# end

# binary = "110"

# p binary.rjust(9,"0")

# animals_to_replace = ["tigers", "elephants", "snakes"]
# text = "In this Zoo we have tigers, elephants & snakes"
# result = text.gsub(Regexp.union(animals_to_replace), "cats")

# p result

# output = "a1 b2 c3".gsub(/\d+/) { |number| number.next }
# p output

# str = "ABCD-123"

# p str.split("-").join("")

# puts "Please type your name:"

# name = gets.chomp
# p name

# p "hello there"[1..-1]

# "Ruby is cool".each_char {|ch| p ch}
# p "Ruby is cool".chars

# p "ascii".chars.map(&:ord)

# animals = ["dog", "cat"].freeze

# animals[0].replace("cat")
# p animals

# letters = ['a','b','c','d']

# p letters.insert(2, 'test')

# p [1,2,3,4].count {|n| n.even? }

# str = ["hello", "lion", "tiger"]

# result = str.map {|n| n.upcase }
# p result

# flat = [[1,2,3], [4,5,6]].flat_map {|n| n.inject(:+) }
# p flat

# splat = *[1,2],3
# p splat

# arr1 = [1,2,3,4]
# arr2 = [4,5,6]
# array = arr1.concat(arr2)
# p array

#  arr = arr1 + arr2
# p arr1
# arr3 = [3]

# p arr1 - arr3
# p arr1 & arr3
# p arr1 | arr2

# prices = {}
# prices[:bacon] = 100

# p prices
# p prices[:bacon]

# h = {water: 300, oil: 100}

# h.each do |key, val|
#   p "The key is #{key} and value is #{val}"    
# end

# p h.keys
# p h.values

# p h.key?(:water)
# p h.value?(300)

# str = "aabbbaa"

# count = {}
# str.each_char do |c|
#   if count.key?(c)
#     count[c] += 1
#   else
#     count[c] = 1
#   end    
# end

# p count

# count = Hash.new(0)
# p count
# str.each_char {|c| count[c] += 1 }

# p count

# h = {}
# p h[:invalid]

# p h.fetch(:invalid)

# fruits = {
#   banana: 1,
#   apple: 2,
#   pear: 3    
# }

# p fruits.transform_values {|v| v * 10 }

# require 'set'

# products = Set.new

# products << 1
# products << 1
# products << 2

# p products
# p products.include?(1)

# p ('a'..'z').to_a
# p (2..15).step(2).to_a

# (1..15).each {|n| p n }

# p (Time.now..Time.now + 60).cover?(Time.now + 30)

# p ("a".."z").include?("cc")
# p ("a".."z").cover?("cc")

# require 'csv'

# p CSV.read('file.csv')


# def self.csv_import
#   CSV.foreach('lib/tasks/glints.csv', encoding: 'ISO-8859-1', liberal_parsing: true) do |row|
#     Restaurant.create!(name: row[0], opening_date: row[1])
#   end
# end

# require 'json'

# json = '{"water": 100, "oil": 300}'

# hash = JSON.parse(json)
# p hash

# ages = [18, 20, 23, 53]

# p ages.classa

# p Array.class
# p String.class
# p Class.class

# Person = Class.new
# john = Person.new

# p john

# p Array.ancestors

# p Array.included_modules

# p Array.singleton_class

# class Animal
#   def self.test
#   end    
# end

# p Animal.singleton_methods

# str = "test"

# def str.show
#   puts self    
# end

# p str.singleton_methods

# str = "alternative syntax"

# class << str
#   def display
#     puts self
#   end    
# end

# p str.singleton_class

# class Animal
#   class << self
#     def run
#     end

#     def eat
#     end
#   end    
# end

# p Animal.singleton_methods

# class Cat
#   singleton_class.send(:attr_reader, :age)    
# end

# p Cat.age

# def print_once
#   yield    
# end
 
# print_once { puts "block is been passed" }

# def one_two_three
#   yield 1
#   yield 2
#   yield 3    
# end

# one_two_three {|num| puts num * 10 }

# def do_something_with_block
#   return "no block given" unless block_given? 
#   yield   
# end

# p do_something_with_block

# say_something = -> { puts "this is a lambda" }
# say_something.call

# two_times = ->(x) { puts x * 2 }

# two_times.call(10)

# my_proc = Proc.new { |x| puts x * 2 }

# my_proc.call(10)

# my_lambda = -> { return 1 }

# puts "lambda_result: #{my_lambda.call}"

# my_proc = Proc.new { return 1 }

# puts "proc_result: #{my_proc.call}"

# def call_proc
#   puts "before proc"
#   my_proc = Proc.new { return 2 }
#   my_proc.call
#   puts "after proc"    
# end

# p call_proc

# def call_proc(my_proc)
#   count = 500
#   my_proc.call    
# end

# count = 1

# my_proc = Proc.new { puts count }

# call_proc(my_proc)


# def return_binding
#   foo = 100
#   binding    
# end

# puts return_binding.class
# puts return_binding.eval('foo')

# animal = ['cat', 'dog'].map(&:upcase)
# p animal

# def to_proc(sym)
#   Proc.new {|x| x.send(sym)}    
# end

# p to_proc(:size).call("test1")

# p "Do you like cats?" = ~/like/

# def contain_vowel(str)
#   str =~ /[aeiou]/    
# end

# p contain_vowel("test")
# p contain_vowel("sky")

# def contain_numbers(str)
#   str =~ /[0-9]/
# end

# p contain_numbers("The year is 2015")
# p contain_numbers("The cat is black")


# p "5a5".match(/\d.\d/)

# p "5a5".match(/\d\.\d/)

# p "5.5".match(/\d\.\d/)

# p "123abc".match /^\d+$/

# p "123".match /^\d+$/

# m = "David 30".match /(?<name>\w+) (?<age>\d+)/

# p m

# item = "John 20 USA".match /(?<name>\w+) (?<age>\d+) (?<country>\w+)/

# p item

# def number_after_word?(str)
#  str.match? /(?<=\w) (\d+)/
# end

#  p number_after_word?("Grade 99")

# puts Numbers::Pi

# module Numbers
#   def self.double(number)
#     number * 2
#   end
# end

# p Numbers.double(30)

# class Calculator
# include Numbers    
# end

# p Calculator.ancestors

module Life
end

class Animal
end

class Cat < Animal
 prepend Life    
end

p Cat.ancestors
