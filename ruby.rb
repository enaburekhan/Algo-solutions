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

# module Life
# end

# class Animal
# end

# class Cat < Animal
#  prepend Life    
# end

# p Cat.ancestors

# p "this is some string".scan(/\w+/)

# p "camelCasingTestFooBar".split(/(?=[A-Z])/)


# Write a ruby function that prints the numbers from 1 to 100.

# But for multiples of three, it prints 'Ping' instead of the number and for the multiples of five, it prints 'Pong'.

# For numbers that are multiples of both three and five print 'PingPong'

# def multiples_of_100(nums)
#     if 100 % 15 
# end

# p multiples_of_100(100)
# def multiples_of_100
#   (1..100).each do |i|
#     if i % 3 == 0 and i % 5 == 0
#       puts "PingPong"
#     elsif i % 5 == 0
#       puts "pong"
#     elsif i % 3 == 0
#       puts "ping"
#     else
#       puts i
#     end   
#   end
# end

# multiples_of_100

# count = {}

# def count_string(str)
#   count = {}
#   str = str.downcase
#   str.each_char do |ch|
#     if count.key?(ch)
#       count[ch] += 1
#     else
#       count[ch] = 1
#     end
#   end
#   count
# end

# char = "ababbBc"

# p count_string(char)

# p [10,20,30].inject { |num, accum| num + accum }

# p [10,20,30].inject(&:+)

# prices = {
#   bacon: 10,
#   coconut: 20
# }

# total_prices = prices.inject(0){ |num, total| num + total[1] }

# p total_prices

# numbers = [1,2,3,4,5]

# p numbers.reject(&:odd?)
# p numbers.reject(&:even?)
# p numbers.partition(&:even?)

# p [48,75,19,12,21].sort_by { |n| n.to_s[-1] }

# module List
#   def add
#     "Add me"
#   end
# end

# class Animal
#   include List
# end

# class Cat < Animal
#   include List
# end

# class Dog < Animal
#   extend List
# end

# cat = Cat.new
# p cat.add
# # p Cat.add
# p Cat.ancestors

# p "*********"

# dog = Dog.new
# p dog.add
# p Dog.add
# p Dog.ancestors

# class FileCabinet
#   def initialize
#     @document = [1,2,3]
#   end

#   def size
#     @document.size
#   end

#   def my_each
#     count = 0
#     while count < size
#       yield @document[count]
#       count += 1
#     end
#   end
# end

# FileCabinet.new.my_each { |doc| p doc }


# enum = [1,2,3,4].select
# p enum.class

# p enum.each { |u| u > 2 }

# loop { p enum.next }

# big_array = Array(1..10_000)
# p big_array.lazy.map { |n| p n; n**2 }.all? { |n| n < 100 }

# def expensive_method
#   50000.times { |n| n * n }
# end

# def measure_time
#   before = Time.now
#   yield
#   Time.now - before
# end

# p measure_time {expensive_method}

# class PrivateTesting

#   private

#   def internal_testing
#     "Only for internal use"
#   end
# end

# pt = PrivateTesting.new
# p pt.internal_testing
# p pt.send(:internal_testing)

# puts self
# class FindingSelf
#   # self is the class
#   puts self
#   def show_self
#   # self is the object instance
#     puts self
#   end
# end

# p String.instance_methods(false).size

# p String.private_instance_methods(false).size

# To get a list of methods inherited by a class
# p Array.instance_methods - Array.instance_methods(false)

# class Total
#   def initialize
#     @count = 2
#   end
# end

# p Total.new.instance_variables

# class A
#   def say
#   end
# end

# class B < A
# end

# p B.new.respond_to?(:say)

# class Animal
#   def self.speak
#   end
# end

# p Animal.method(:speak).source_location

# module Products
#   def self.included(base)
#     p "> Products included into #{base}"
#   end
# end

# class Shop
#   include Products
# end

# class Cart
#   include Products
# end

# Cart.new
# p shop.included

# p "hello"

# puts 1, nil, nil, 2

# class Customer
#   @@no_of_customers = 0

#   def add_new_customer()
#       @@no_of_customers += 1
#   end
#   def total_no_of_customers()
#       puts "Total: #{@@no_of_customers}"
#   end
# end


# cust1 = Customer.new
# cust2 = Customer.new

# cust1.add_new_customer()
# cust2.add_new_customer()
# cust1.total_no_of_customers()


# begin
#   varA = 50
#   varB = _________ 
#   raise ZeroDivisionError.new "varB is equal to 0"
#   puts varA/varB
# rescue StandardError => e   
#  puts e.message 
# end

# hash = {data:"key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47, key=0Sr4C, age=68, key=CGEqo, age=76,
#  key=IxKVQ, age=79, key=eD221, age=29, key=XZbHV, age=32, key=k1SN5, age=88, key=4SCsU, age=65, 
#  key=q3kG6, age=33, key=MGQpf, age=13, key=Kj6xW, age=14, key=tg2VM, age=30, key=WSnCU, age=24, 
#  key=f1Vvz, age=46, key=dOS7A, age=72, key=tDojg, age=82, key=nZyJA, age=48, key=R8JTk, age=29, 
#  key=005Ot, age=66, key=HHROm, age=12, key=5yzG8, age=51, key=xMJ5D, age=38, key=TXtVu, age=82, 
#  key=Hz38B, age=84, key=WfObU, age=27, key=mmqYB, age=14, key=4Z3Ay, age=62, key=x3B0i, age=55, 
#  key=QCiQB, age=72, key=zGtmR, age=66, key=nlIN9, age=8, key=hKalB, age=50, key=Na33O, age=17, 
#  key=jMeXm, age=15, key=OO2Mc, age=32, key=hhowx, age=34, key=gLMJf, age=60, key=PblX6, age=66, 
#  key=8Vm5W, age=22, key=oZKd6, age=88, key=RXNfQ"
# }

# def count_age(data)
#   count = 0  
#   data.each_value do |val|
#      val = val.gsub("=", "")
#      .split(",").map {|item| item.to_s }
#      p val
#   end 
#   count  
# end

# count_age(hash)


# def count_char(str)
#     count = {}  
#   str.each_char do |ch|
#     if count.include?(ch)
#       count[ch] += 1
#     else
#       count[ch] = 1      
#     end
#   end 
#   count   
# end 

# str = "aabbbaa"

# p count_char(str)


# def two_number_sum(array, target_sum) 
#   hash = {}
#   array.each do |val|
#     potential_match = target_sum - val
#     if hash.include?(potential_match)
#       return [potential_match, val]
#     else
#         hash[val] = true
#     end
#   end
#     []
# end

# array = [3, 5, -4, 8, 11, 1, -1, 6]
# target_sum = 10

# p two_number_sum(array, target_sum)


# x = [{"a" => 10},{"b" => 20},{"c" => 30}]

# p x.reduce(:merge)


# class Employee   
#   def initialize     
#       @full_time = false     

#       binding.irb     

#       @full_time = true  

#       puts "Full time: #{@full_time}"   
#   end 
# end  

# Employee.new

# my_counter = 2

# while my_counter < 68
#   p my_counter
#   my_counter **= 2
# end

# arr = [2, 3]

# arr[2] = 4
# arr[4] = 6

# p arr
# p arr[3]

# require 'erb'

# x = 42

# template = ERB.new <<-EOF
#   The value of x is: <%= x %>
# EOF


# clauses =  [
#             { 'id': 1, 'text': 'The quick brown fox' },
#             { 'id': 2, 'text': 'Jumps over the lazy dog' },
#             { 'id': 3, 'text': 'And dies' },
#             { 'id': 4, 'text': 'The white horse is white' },
#           ] 

# p clauses[0][:text]
# p clauses[1][:text]
# p clauses[2][:text]
#  clauses[3][:text]

# sections = [
#              { "id": 1, "clauses_ids": [1, 2] }
#            ] 
           
#  puts sections[0][:clauses_ids] = [clauses[0][:text], clauses[1][:text]]         

# arr = Array.new(5).fill(1)

# p arr

# p true.class


# def buy_milk
# "got milk"
# end
# def buy_bacon
# raise "No bacon left!"
# end
# def go_shopping
# buy_milk
# buy_bacon
# end
# go_shopping


# animal = 'cat'

# puts "Hello nice #{animal} you have there!"

# see = " he ll o ".gsub(/^\s+/, '')

# p see
# puts see

# str = 'ABCD-123'

# p str.split('-')

# puts "Please type your name: "
# name = gets.chomp
# puts "#{name}, you are welcome to my world"

# puts 'hello world'[0..4]

# puts 'hello world'[0..-1]

# "Ruby is cool".chars { |ch| p ch }

# puts 'ascii'.chars.map(&:ord)

# str = 'My cat is black'
# str[0] = ''
# p str

# letters = ['a','b','c','d']
# p letters.insert(2, 'test')
# p letters.size

# [[1, 2, 3], [4, 5, 6]].flat_map { |a| p a.inject(:+) }

# numbers = [1, 3, 3, 5, 5]
# p numbers.uniq
# p numbers.take(3)
# p numbers[0,3]

# count = {}
# def count_str(str)
#   count = {}
#   str.each_char do |ch|
#     if count.key?(ch)
#       count[ch] += 1
#     else
#       count[ch] = 1      
#     end
#   end
#   count    
# end

# str = "aabbbaa"
# p count_str(str)

# h = { name: 'Jose', age: 29 }

# puts h.merge(age: 30, city: 'Spain')

# class UrlFetcher
#   attr_reader :config
#   def initialize(url, options = {})
#     @config = {
#       url: url,
#       port: 80,
#       verb: "get",
#       protocol: "http"
#     }
#     @config.merge!(options)
#   end
# end

#   fetcher = UrlFetcher.new("example.com", port: 8080)
#   p fetcher.config



require 'set'

product = Set.new()

product << 1
product << 1
product << 2

p product
