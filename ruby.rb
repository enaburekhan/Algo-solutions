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

p Array.class
p String.class
p Class.class

Person = Class.new
john = Person.new

p john