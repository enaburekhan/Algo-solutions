# Array of products
# O(n^2) time | O(n) space
# def array_of_products(array)
#     products = [];
#   (0..(array.size - 1)).each do |i|
#     running_product = 1
#     (0..(array.size - 1)).each do |j|
#         if i != j
#           running_product *= array[j]    
#         end
#         products[i] = running_product
#     end
#   end
#    products   
# end

# array = [5, 1, 4, 2]

# p array_of_products(array) # [8, 40, 10, 20]

# O(n) time | O(n) space
# def array_of_products(array)
#   products = Array.new(array.size).fill(1)
#   left_products = Array.new(array.size).fill(1)
#   right_products = Array.new(array.size).fill(1)
  
#   left_running_product = 1
#   (0..(array.size - 1)).each do |i|
#     left_products[i] = left_running_product
#     left_running_product *= array[i]
#   end

#   right_running_product = 1
#   (0..(array.size - 1)).reverse_each do |i|
#     right_products[i] = right_running_product
#     right_running_product *= array[i]
#   end

#   (0..(array.size - 1)).each do |i|
#     products[i] = left_products[i] * right_products[i]
#   end
#   return products
# end

# array = [5, 1, 4, 2]

# p array_of_products(array) # [8, 40, 10, 20]

# O(n) time | O(n) space
# def array_of_products(array)
#   products = Array.new(array.size).fill(1) 
  
#   left_running_product = 1
#   (0..(array.size - 1)).each do |i|
#     products[i] = left_running_product
#     left_running_product *= array[i]
#   end

#   right_running_product = 1
#   (0..(array.size - 1)).reverse_each do |i|
#      products[i] *= right_running_product
#      right_running_product *= array[i]
#   end
#    products
# end

# array = [5, 1, 4, 2]

# p array_of_products(array) # [8, 40, 10, 20]



# def merged_over_lapping_intervals(array)
#   sorted_array = array.sort() 
#   current_interval = sorted_array[0]
#   merge_interval = []
#   merge_interval << current_interval 

#   sorted_array.each do |next_interval|
#     _, current_interval_end = current_interval
#     next_interval_start, next_interval_end = next_interval
#     if current_interval_end >= next_interval_start
#       current_interval[1] = [current_interval_end, next_interval_end].max
#     else
#       current_interval = next_interval
#       merge_interval << current_interval      
#     end
#   end
#    merge_interval
# end

# interval = [[1,2], [3,5], [4,7], [6,8], [9,10]]

# p merged_over_lapping_intervals(interval) #[[1,2], [3,8], [9,10]]

# def four_number_sum(array, target_sum)
#  all_pairs_sum = {}
#  quadruplets = []
#    (1...(array.size - 1)).each do |i|
#       ((i+1)..(array.size - 1)).each do |j|
#          current_sum = array[i] + array[j]
#          diff = target_sum - current_sum
#          if all_pairs_sum.include?(diff)
#             all_pairs_sum[diff].each do |pairs|
#                 p all_pairs_sum[diff]
#                 quadruplets << pairs.concat([array[i], array[j]])
#             end
#          end    
#       end
#       (0...i).each do |k|
#           current_sum = array[k] + array[i]
#           if !all_pairs_sum.include?(current_sum)
#             all_pairs_sum[current_sum] = [[array[k], array[i]]]
#           else
#               all_pairs_sum[current_sum] << [[array[k], array[i]]]
#           end
#       end
#    end
#     quadruplets     
# end

# array = [7, 6, 4, -1, 1, 2]
# target_sum = 16

# p four_number_sum(array, target_sum); #[[7, 6, 4, -1], [7, 6, 1, 2]]

# def min_rewards(scores)
#   rewards = Array.new(scores.size).fill(1)
#   (0..(scores.size - 1)).each do |i|
#     if scores[i] > scores[i-1]
#         rewards[i] = rewards[i-1] + 1
#     end
#   end

#   (0...(scores.size - 1)).reverse_each do |i|
#     if scores[i] > scores[i+1]
#       rewards[i] = (rewards[i], (rewards[i+1] + 1)).max()
#     end
#   end
#    rewards 
# end

# scores = [8, 4, 2, 1, 3, 6, 7, 9, 5]   
# p min_rewards(scores);   # 25 [4, 3, 2, 1, 2, 3, 4, 5, 1]

# def zigzag_traverse(array)
#   height = array.size - 1
#   width = array[0].size - 1
#   row = 0
#   col = 0
#   going_down = true
#   result = []

#   while !is_out_of_bounds(row, col, height, width)
#     result << array[row][col]
#    if going_down
#     if col == 0 or row == height
#       going_down = false
#       if row == height
#         col += 1
#       else
#         row += 1
#       end
#     else
#       row += 1
#       col -= 1
#     end
#   else
#     if row == 0 or col == width
#       going_down = true
#       if col == width
#         row += 1
#       else
#         col += 1
#       end
#     else
#       row -= 1
#       col += 1
#     end
#    end
#   end
#   result
# end

# def is_out_of_bounds(row, col, height, width)
#   row < 0 or row > height or col < 0 or col > width
# end

#  array = [
#   [1, 3, 4, 10],
#   [2, 5, 9, 11],
#   [6, 8, 12, 15],
#   [7, 13, 14, 16],
# ]

# p zigzag_traverse(array); # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

# def is_toeplitz(arr)
#   (0..(arr.size - 1)).each do |row|
#     (0..(arr[0].size - 1)).each do |col|
#       if ((arr[row + 1] != undefined )
#         & (arr[row + 1][col + 1] != undefined)
#         & (arr[row + 1][col + 1] != arr[row][col]))
#         return false
#       end
#     end
#   end
#    true
# end

# arr1 = [[1,2,3,4],
#         [5,1,2,3],
#         [6,5,1,2]]

# arr2 = [[1,2,3,4],
#         [5,1,9,3],
#         [6,5,1,2]]              

# p is_toeplitz(arr1);


#----------Reload------------#

# Two number sum
# O(n) time | O(n) space 
# def two_number_sum(array, target_sum)
#     nums = {}
#     array.each do |num|
#         potential_match = target_sum - num
#         return [potential_match, num] if nums.key?(potential_match) 

#         nums[num] = true
#     end
#     []
# end

# O(nlogn) time | O(1) space
def two_number_sum(array, target_sum)
  array.sort
  left = 0
  right = array.size - 1 
  while left < right
    current_sum = array[left] + array[right]
     if current_sum == target_sum
        return [array[left], array[right]]
     elsif current_sum < target_sum
         left += 1 
     else
        right -= 1 
     end
  end   
   []   
end
array = [3, 5, -4, 8, 11, 1, -1, 6]
target_sum = 10
 p two_number_sum(array, target_sum)  #[11, -1]


#  validate subsequence
#  O(n) time | O(1) space
def validate_subsequence(array, sequence)
  seq_idx = 0
  arr_idx = 0
  while seq_idx < sequence.size and arr_idx < array.size
    seq_idx += 1 if sequence[seq_idx] == array[arr_idx]
    arr_idx += 1
  end
   seq_idx == sequence.size
end

 array = [5, 1, 22, 25, 6, -1, 8, 10]
 sequence = [1, 6, -1, 10]

 p validate_subsequence(array, sequence)  # true


#  Sorted Square Array
# O(nlogn) time | O(n) space
# def sorted_square_array(array)
#   result = array.map {|item| item * item}
#   result.sort
# end

def sorted_square_array(array)
  sorted_array = Array.new(array.size).fill(0)
  start_idx = 0
  end_idx = array.length - 1
  (0..(array.size-1)).reverse_each do |idx|
    start_value = array[start_idx]
    end_value = array[end_idx]
    if start_value.abs > end_value.abs
      sorted_array[idx] = start_value * start_value
      start_idx += 1
    else
      sorted_array[idx] = end_value * end_value
      end_idx -= 1
    end
  end
  sorted_array
end

array = [-7, -5, -3, 4, 6, 8]

p sorted_square_array(array)  # [9, 16, 25, 36, 49, 64]

